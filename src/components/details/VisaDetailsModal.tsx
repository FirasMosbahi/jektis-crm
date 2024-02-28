"use client";
import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { MoreDetailsIcon, ProfileIcon } from "@jektis-crm/components/icons";
import { Client } from "@jektis-crm/types/client";
import { BilletRequest } from "@jektis-crm/types/billet";
import { VisaRequest } from "@jektis-crm/types/visa";

export default function VisaDetailsModal({
  visaRequest,
}: {
  visaRequest: VisaRequest;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <MoreDetailsIcon className="size-8" />
      </button>
      <Modal
        className="pt-28 backdrop-blur"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="text-4xl px-12 py-6">
          {visaRequest.title}
        </Modal.Header>
        <Modal.Body>
          <div className=" max-w-2xl overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <p className="mt-1 text-base max-w-2xl text-gray-500">
                {visaRequest.description}
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {visaRequest.deadline && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-500">
                      To be completed before :
                    </dt>
                    <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                      {visaRequest.deadline.toString().split("T")[0]}
                    </dd>
                  </div>
                )}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="font-medium text-gray-500">
                    Creation method :
                  </dt>
                  <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                    {visaRequest.creationMethod}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className=" font-medium text-gray-500">Destination :</dt>
                  <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
                    {visaRequest.destination}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className=" font-medium text-gray-500">
                    visa duration :
                  </dt>
                  <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
                    {visaRequest.duration}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className=" font-medium text-gray-500">
                    visa starts from :
                  </dt>
                  <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
                    {visaRequest.startFrom.toString().split("T")[0]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="px-8 flex flex-row w-full justify-between">
          <button
            className="bg-green-400 px-8 py-3 text-white border rounded-2xl"
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
