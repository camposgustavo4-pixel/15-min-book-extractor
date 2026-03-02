type BookPlanPageProps = {
  params: {
    id: string;
  };
};

export default function BookPlanPage({ params }: BookPlanPageProps) {
  return <h2 className="text-2xl font-semibold">Book Plan: {params.id}</h2>;
}
