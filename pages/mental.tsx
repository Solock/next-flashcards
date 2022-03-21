import { Layout } from "../components/layout"
import MentalCard from "../components/Mental";

const Mental: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-center">Mental FlashCard</h1>
        <MentalCard />
      </div>
    </Layout>
  )
}

export default Mental;
