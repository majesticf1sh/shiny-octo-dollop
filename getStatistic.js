TaskQueue.getTravelJob = (e) => {
  try {
  if(!new JobPrototype().p) return;
  return { jobId: e, inventory: true };
  } catch (e) {};
};
