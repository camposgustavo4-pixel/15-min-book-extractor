type SessionPageProps = {
  params: {
    id: string;
  };
};

export default function SessionPage({ params }: SessionPageProps) {
  return <h2 className="text-2xl font-semibold">Session: {params.id}</h2>;
}
