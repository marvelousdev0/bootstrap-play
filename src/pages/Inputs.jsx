import Input from "../components/Input";
import PageTitle from "../components/PageTitle";

export default function Inputs() {
  return (
    <div>
      <PageTitle title="Inputs" />
      <section className="page-section mt-5">
        <Input
          id="example-input"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          value=""
          onChange={() => {}}
        />
      </section>
    </div>
  );
}
