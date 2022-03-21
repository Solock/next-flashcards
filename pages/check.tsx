import CheckCard from "../components/Check";
import { Layout } from "../components/layout"

const Check: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Check FlashCard</h1>
        <CheckCard />
      </div>
    </Layout>
  )
}

export default Check;
