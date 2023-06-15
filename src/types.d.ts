export interface MovieItemProps {
    id: string;
    text: string;
    onEdit: (id: string, newText: string) => void;
    isEditing: boolean;
  }