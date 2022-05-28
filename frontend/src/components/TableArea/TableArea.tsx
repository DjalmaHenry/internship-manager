import { useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { Zoom } from "react-reveal";

import Modal from "../Modal/RegisterIntern";
import { api } from "../../services/api";
import { InternProps } from "../../assets/types";

import {
  Container,
  Content,
  HeaderTable,
  StatusPending,
  StatusVerified,
  Table,
} from "./styles";

import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export const TableArea = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dataInterns, setDataInterns] = useState<InternProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      api
        .get("all-interns")
        .then((response) => {
          setDataInterns(response.data);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  const deleteIntern = (ra: number) => {
    api
      .delete(`delete-intern/${ra}`)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <Container>
        <Zoom>
          <Content>
            <HeaderTable>
              <p>Monitor interns, their contracts and reports.</p>
              <button onClick={() => setModalOpen(true)}>
                Register intern
              </button>
            </HeaderTable>
            <h1>All Internships</h1>
            <Table>
              <thead>
                <tr>
                  <th>Internship</th>
                  <th>Contract status</th>
                  <th>Report status</th>
                  <th>Vacancy</th>
                  <th>Company</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataInterns.length === 0 ? (
                  <div>
                    <ReactLoading
                      type="spin"
                      color="#1a7ae0"
                      height={100}
                      width={100}
                    />
                    <h1>Looking for data</h1>
                  </div>
                ) : (
                  <>
                    {dataInterns.map((intern: InternProps) => (
                      <tr key={intern.RA}>
                        <td>
                          {intern.first_name} {intern.last_name}
                        </td>
                        <td>
                          {intern.status === "Pending" ? (
                            <StatusPending>{intern.status}</StatusPending>
                          ) : (
                            <StatusVerified>{intern.status}</StatusVerified>
                          )}
                        </td>
                        <td>
                          {intern.internship_checklist === "Pending" ? (
                            <StatusPending>Pending</StatusPending>
                          ) : (
                            <StatusVerified>Verified</StatusVerified>
                          )}
                        </td>
                        <td>{intern.job_description}</td>
                        <td>{intern.company_name}</td>
                        <td>
                          <MdModeEditOutline
                            onClick={() =>
                              navigate(`/edit-intern/${intern.RA}`)
                            }
                          />
                          <TiDocumentText
                            onClick={() =>
                              navigate(`/detail-intern/${intern.RA}`)
                            }
                          />
                          <BsFillTrashFill
                            color="red"
                            onClick={() => deleteIntern(intern.RA)}
                          />
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </Content>
        </Zoom>
      </Container>
    </>
  );
};
