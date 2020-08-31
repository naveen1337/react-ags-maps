import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');

const Zoom = ({ position = "top-right" }) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let zoom;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Zoom"];

      const [Zoom] = await loadModules(reqModules);

      zoom = new Zoom({
        view
      });
      
      mounted && view.ui.add(zoom, position);
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      zoom && zoom.destroy();
    }
  }, [view, position]);

  return (<></>);

};


export default Zoom;