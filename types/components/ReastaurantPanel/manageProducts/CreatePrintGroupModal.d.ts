import React from 'react';
interface CreatePrintGroupModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (printGroupName: string) => void;
}
declare const CreatePrintGroupModal: React.FC<CreatePrintGroupModalProps>;
export default CreatePrintGroupModal;
