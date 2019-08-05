import React, { useState, useContext } from "react";
import githubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const gitHubcontext = useContext(githubContext);
  const alertcontext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertcontext.setAlert("Please enter something", "light");
    } else {
      gitHubcontext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {gitHubcontext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={gitHubcontext.clearUser}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
