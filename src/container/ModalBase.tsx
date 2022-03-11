import { Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal } from "@chakra-ui/react"

const ModalBase = ({ title, body, footer, isOpen, onClose }
  : { title: string, body: JSX.Element, footer: JSX.Element, isOpen: boolean, onClose: () => void }) => {
  return (
    <>
      <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {body}
          </ModalBody>

          <ModalFooter>
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalBase