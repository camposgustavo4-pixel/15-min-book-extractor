type SummaryPageProps = {
  params: {
    id: string;
  };
};

export default function SummaryPage({ params }: SummaryPageProps) {
  return <h2 className="text-2xl font-semibold">Summary: {params.id}</h2>;
}
