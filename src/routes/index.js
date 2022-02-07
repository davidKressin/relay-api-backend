import {Router} from "express";
import {getIndex, relayOff, relayOn} from "../controllers/index.js"

const router = Router();

router.get('/', getIndex);
router.post('/ON',relayOn);
router.post('/OFF', relayOff);

export default router;