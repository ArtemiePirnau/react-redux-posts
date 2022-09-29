import { createContext, useState } from "react";

export const AppLevelContext = createContext();

const AppLevelProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <AppLevelContext.Provider
      value={{
        title,
        content,
        author,
        setTitle,
        setContent,
        setAuthor,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};
export default AppLevelProvider;
