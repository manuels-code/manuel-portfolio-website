import ProgressBar from "./progressBar.component";

const SkillsTab = ({ skillsList }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] pb-6">Skills</h2>
      <p className="pb-6">
      I am always learning new skills, and at the same time I keep my current web development abilities up to date with the new updates. I am Currently in the process of learning advance Back-End techinques to build a solid set of skills. 
      </p>
      <h3>Technologies average per project</h3>
      {skillsList.map(({ title, percentage }) => <ProgressBar key={title} title={title} percentage={percentage} />)}
    </div>
  );
};

export default SkillsTab;
