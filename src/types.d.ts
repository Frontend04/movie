export interface MovieItemProps {
    id: string;
    text: string;
    onEdit: (id: string, newText: string) => void;
    onDelete: (id: string) => void;
    isEditing: boolean;
}
export interface AppState {
  movies: MovieItem[];
  currentMovie: string;
}
export interface MovieItem {
  id: string;
  text: string;
}