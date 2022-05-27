import {
  Container,
  Content,
  HeaderTable,
  StatusPending,
  StatusVerified,
  Table,
} from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";
import Modal from "../Modal/RegisterIntern";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { InternProps } from "../../assets/types";

export const TableArea = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dataInterns, setDataInterns] = useState<InternProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("all-interns")
      .then((response) => setDataInterns(response.data))
      .catch((error) => console.log(error));
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
        <Content>
          <HeaderTable>
            <p>Monitor interns, their contracts and reports.</p>
            <BiSearchAlt />
            <input placeholder="Search intern" />
            <button onClick={() => setModalOpen(true)}>Register intern</button>
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
                      onClick={() => navigate(`/edit-intern/${intern.RA}`)}
                    />
                    <TiDocumentText
                      onClick={() => navigate(`/detail-intern/${intern.RA}`)}
                    />
                    <BsFillTrashFill
                      color="red"
                      onClick={() => deleteIntern(intern.RA)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
      </Container>
    </>
  );
};
