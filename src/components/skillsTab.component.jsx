import ProgressBar from "./progressBar.component";

const SkillsTab = ({ skillsList }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] pb-6">Skills</h2>
      <p className="pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus
        eaque inventore saepe aperiam quidem omnis recusandae harum, iusto
        pariatur consectetur. Qui nobis ipsa odit nam vel doloribus iste
        similique.
      </p>

      {skillsList.map(({ title, percentage }) => <ProgressBar key={title} title={title} percentage={percentage} />)}
    </div>
  );
};

export default SkillsTab;
