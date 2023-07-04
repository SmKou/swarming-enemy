import p5 from 'p5';
import { setApp, sketch } from './sketch';
import './styles.css';

// Refer variables from .env => ${process.env.varName}

const container = document.getElementById('app');
setApp(500, 500);
new p5(sketch, container);