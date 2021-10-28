import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

const ChnagePasswordSuccessfully = ({ onHide, show, goToLogin }) => {
    const { t } = useTranslation();

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                size="lg"
                dialogClassName=" bg-color "
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="">
                    <h4 className="">{`${t("Modal.password")}`}</h4>
                    <h4 className="">{`${t("Modal.has_been_changed")}`}</h4>
                </Modal.Body>
                <Modal.Footer className="">
                    <Button onClick={goToLogin} className="">{`${t("Modal.ok")}`}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChnagePasswordSuccessfully
