import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build_web/Build/build_web.loader.js",
    dataUrl: "build_web/Build/build_web.data",
    frameworkUrl: "build_web/Build/build_web.framework.js",
    codeUrl: "build_web/build/Build_web.wasm",
  });

  return <Unity width="500px" height="350px" unityProvider={unityProvider} />;
}

export default App;
