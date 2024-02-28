"use client";
import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { AddIcon } from "@jektis-crm/components/icons";

export default function AssignToMeModal({
  title,
  deadline,
}: {
  title: string;
  deadline?: Date;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <AddIcon className="size-8" />
      </button>
      <Modal
        className="pt-28 backdrop-blur"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="text-2xl px-12 py-6">
          Do you want to assign the demand {title} to yourself
        </Modal.Header>
        {deadline && (
          <Modal.Body>
            <div className=" max-w-2xl overflow-hidden sm:rounded-lg">
              Important : This demand should be treated before $
              {deadline.toString().split("T")[0]}
            </div>
          </Modal.Body>
        )}
        <Modal.Footer className="px-8 flex flex-row w-full justify-between">
          <button
            className="border border-solid bg-green-500 rounded-2xl px-8 py-3 text-black"
            onClick={() => setOpenModal(false)}
          >
            Assign to me
          </button>
          <button
            className="border border-solid border-gray-500 rounded-2xl px-8 py-3 text-black"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
