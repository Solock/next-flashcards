import InputCard from "../components/Input";
import { Layout } from "../components/layout"

const Input: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-center">Input FlashCard</h1>
        <InputCard />
      </div>
    </Layout>
  )
}

export default Input;
