interface EmptyBoardProps {
  content: string;
}

const EmptyBoard = ({ content }: EmptyBoardProps) => {
  return (
    <div>
      <p className="text-center md:text-left text-muted-foreground font-medium">{content}</p>
    </div>
  );
};

export default EmptyBoard;
