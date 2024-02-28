"use client";
import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { ProfileIcon } from "@jektis-crm/components/icons";
import { Client } from "@jektis-crm/types/client";

export default function ClientDetailsModal({ client }: { client: Client }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <ProfileIcon className="size-8" />
      </button>
      <Modal
        className="pt-28 backdrop-blur"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="text-4xl px-12 py-6">
          {client.fullName}
        </Modal.Header>
        <Modal.Body>
          <div className=" max-w-2xl overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                {client.email && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-500">
                      Client e-mail :
                    </dt>
                    <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                      {client.email}
                    </dd>
                  </div>
                )}
                {client.phoneNumber && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-500">
                      Client phone number :
                    </dt>
                    <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                      {client.phoneNumber}
                    </dd>
                  </div>
                )}
                {client.facebook && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-500">
                      Client facebook profile :
                    </dt>
                    <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                      {client.facebook}
                    </dd>
                  </div>
                )}
                {client.whatsApp && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-500">
                      Client whats app number :
                    </dt>
                    <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                      {client.whatsApp}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="px-8 flex flex-row w-full justify-end">
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
