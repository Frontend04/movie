export interface MovieItemProps {
    id: string;
    text: string;
    onEdit: (id: string, newText: string) => void;
    onDelete: (id: string) => void;
    isEditing: boolean;
  }