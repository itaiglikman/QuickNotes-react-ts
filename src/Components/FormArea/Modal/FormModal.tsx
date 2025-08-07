import "./Modal.css";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export function FormModal() {
    // const [opened, { open, close }] = useDisclosure(false);

    // return (
    //     <>
    //         <Modal
    //             opened={opened}
    //             onClose={close}
    //             title="Authentication"
    //             overlayProps={{
    //                 backgroundOpacity: 0.55,
    //                 blur: 3,
    //             }}
    //         >
    //           <div>hello</div>
    //         </Modal>

    //         <Button variant="default" onClick={open}>
    //             Open modal
    //         </Button>
    //     </>
    // );
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Authentication">
                {/* Modal content */}
            </Modal>

            <Button variant="default" onClick={open}>
                Open modal
            </Button>
        </>
    );
}