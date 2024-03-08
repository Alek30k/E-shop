import { categories } from "@/utils/Categories";
import Container from "../Container";

function Categories() {
  return (
    <div className="bg-white">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <div key={item.id}></div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Categories;
