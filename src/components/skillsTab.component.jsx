import ProgressBar from "./progressBar.component";

const TabSkills = ({ data }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] pb-6">Skills</h2>
      <p className="pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus
        eaque inventore saepe aperiam quidem omnis recusandae harum, iusto
        pariatur consectetur. Qui nobis ipsa odit nam vel doloribus iste
        similique.
      </p>

      {data.map((data) => (
        <ProgressBar title={data.title} percentage={data.percentage} />
      ))}
    </div>
  );
};

export default TabSkills;
