import {
  Container,
  Content,
  HeaderTable,
  StatusPending,
  StatusVerified,
  Table,
} from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { mockInterns } from "../../assets/utils";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { MdModeEditOutline } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

export const TableArea = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
              {mockInterns.map((intern, index) => (
                <tr key={index}>
                  <td>{intern.name}</td>
                  <td>
                    {intern.contractStatus === "Pending" ? (
                      <StatusPending>{intern.contractStatus}</StatusPending>
                    ) : (
                      <StatusVerified>{intern.contractStatus}</StatusVerified>
                    )}
                  </td>
                  <td>
                    {intern.reportStatus === "Pending" ? (
                      <StatusPending>{intern.reportStatus}</StatusPending>
                    ) : (
                      <StatusVerified>{intern.reportStatus}</StatusVerified>
                    )}
                  </td>
                  <td>{intern.vacancy}</td>
                  <td>{intern.company}</td>
                  <td>
                    <MdModeEditOutline />
                    <TiDocumentText />
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
