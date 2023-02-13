const {
  getAllStore,
  getStoreByID,
  createStore,
  updateStore,
  deleteStore,
} = require("../controllers/storeControllers");

const getAllStoreHandler = async (req, res) => {
  try {
    const all = await getAllStore();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const getStoreByIDHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const storeDetail = await getStoreByID(id);
    return res.status(200).json(storeDetail);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const postStoreHandler = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newStore = await createStore(name, location);
    return res.status(200).json(newStore);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const putStoreHandler = async (req, res) => {
  const store = req.body;
  const { id } = req.params;
  try {
    const storeEdited = await updateStore(store, id);
    return res.status(200).json(storeEdited);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deleteStoreHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const storeDelete = await deleteStore(id);
    return res.status(200).send(storeDelete);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  getAllStoreHandler,
  getStoreByIDHandler,
  postStoreHandler,
  putStoreHandler,
  deleteStoreHandler,
};