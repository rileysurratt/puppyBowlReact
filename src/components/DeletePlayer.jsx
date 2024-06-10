// Delete Player on main player card

const DeletePlayer = async (id) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    alert("You have deleted player")
    return result;
  } catch (error) {
    console.error("Could not delete player try again later", error);
  }
};

export default DeletePlayer;