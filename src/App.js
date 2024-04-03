import React, { useState } from "react";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import Description from "./components/Description/Description";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "1. JavaScript - это язык программирования, который широко используется для разработки веб-приложений. Он позволяет добавлять интерактивность и динамическое поведение на веб-страницах.",
    },
    {
      id: 2,
      title: "Python",
      body: "2. Python - это язык программирования, который был создан в конце 1980-х и начале 1990-х годов. Он известен своей простотой и читаемостью кода. Python поддерживает различные парадигмы программирования, включая процедурное, объектно-ориентированное и функциональное программирование.",
    },
    {
      id: 3,
      title: "C++",
      body: "3. C++ - это высокоуровневый, общего назначения язык программирования, созданный датским компьютерным ученым Бьярне Страуструпом. Он был выпущен в 1985 году как расширение языка программирования C и с тех пор значительно развился. C++ сочетает в себе возможности процедурного, объектно-ориентированного и обобщенного программирования.",
    },
    {
      id: 4,
      title: "Java",
      body: "4. Java - это высокоуровневый язык программирования, который был создан в 1990 году компанией Sun Microsystems (теперь Oracle). Он известен своей платформенной независимостью, что означает, что программы, написанные на Java, могут выполняться на различных операционных системах без необходимости перекомпиляции.",
    },
    {
      id: 5,
      title: "C#",
      body: "5. C# (C Sharp) - это высокоуровневый язык программирования, разработанный компанией Microsoft. Он был создан в 2000 году и является частью платформы .NET. C# объединяет в себе возможности языков C и C++, а также добавляет свои собственные особенности.",
    },
    {
      id: 6,
      title: "PHP",
      body: "6. PHP (Hypertext Preprocessor) - это широко используемый язык программирования с открытым исходным кодом, который особенно подходит для разработки веб-приложений и может быть встроен в HTML.",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    console.log(post);
  };
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <div className="App">
      <Description />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов Javascript"}
      />
      {/* <hr style={{ margin: "15px 0" }} /> */}
      <MyButton style={{ marginTop: "30px" }} onClick={(e) => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
    </div>
  );
}

export default App;
