interface EmptyBoardProps {
  content: string;
}

const EmptyBoard = ({ content }: EmptyBoardProps) => {
  return (
    <div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
};

export default EmptyBoard;
