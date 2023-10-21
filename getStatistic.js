TaskQueue.getTravelJob = (e) => {
  try {
  return { job_id: e, Inventory: true };
  } catch (e) {};
};
