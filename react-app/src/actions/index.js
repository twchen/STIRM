export const SET_ACTIVE_COMPONENT = "SET_ACTIVE_COMPONENT";
export const SET_CANDIDATES = "SET_CANDIDATES";
export const SET_DATASET = "SET_DATASET";
export const TOGGLE_MASK = "TOGGLE_MASK";
export const INCREMENT_QCOUNT = "INCREMENT_QCOUNT";
export const PRUNE_POINTS = "PRUNE_POINTS";
export const SET_LEFT_POINTS = "SET_LEFT_POINTS";
export const SET_MODE = "SET_MODE";
export const RESTART = "RESTART";
export const UPDATE_CONVEX_HULL = "UPDATE_CONVEX_HULL";

export const setActiveComponent = component => ({
  type: SET_ACTIVE_COMPONENT,
  component
});

export const setCandidates = candidates => ({
  type: SET_CANDIDATES,
  candidates
});

export const setDataset = (dataset, attributes) => ({
  type: SET_DATASET,
  dataset,
  attributes
});

export const toggleMask = (attr, val) => ({
  type: TOGGLE_MASK,
  mask: { [attr]: val }
});

export const incrementQCount = () => ({
  type: INCREMENT_QCOUNT
});

export const prunePoints = (points, indices) => ({
  type: PRUNE_POINTS,
  points,
  indices
});

export const setLeftPoints = points => ({
  type: SET_LEFT_POINTS,
  points
});

export const changeMode = mode => ({
  type: SET_MODE,
  mode
});

export const restart = () => ({
  type: RESTART
});

export const updateConvexHull = (vertices) => ({
  type: UPDATE_CONVEX_HULL,
  vertices
});