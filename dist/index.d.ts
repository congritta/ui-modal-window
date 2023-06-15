import { ReactNode } from 'react';
export default function ModalWindow(props: {
    isActive: boolean;
    title: JSX.Element | string;
    children?: ReactNode;
    onClose?(): void;
    animationDuration?: number;
    closeButtonContents?: JSX.Element | string;
    containerClassName?: string;
    headerClassName?: string;
    headerTitleClassName?: string;
    closeButtonClassName?: string;
    contentsClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map