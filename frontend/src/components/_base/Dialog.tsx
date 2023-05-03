import { Dialog, DialogTitle } from "@mui/material";
import { ReactNode } from "react";

export type BaseDialogProps = {
  open: boolean,
  title?: string,
  content?: ReactNode
  actions?: ReactNode,
  children?: ReactNode,
  onClose?: (...args: unknown[]) => unknown;
}

export const BaseDialog = (props: BaseDialogProps) => {
  const { open, title, content, actions, children, onClose} = props;
  return (
    <Dialog onClose={onClose} open={open}>
      { title && <DialogTitle>{title}</DialogTitle> }
      {
        content || children &&
        <div className="dialog-content">{content || children}</div>
      }
      {
        actions &&
        <div className="dialog-actions">{actions}</div>
      }
    </Dialog>
  );
}
