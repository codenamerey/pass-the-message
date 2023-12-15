import axios from "axios";

const tryUserFetch = async() => {
    try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`,
          {
            withCredentials: true,
          }
        );
        
        const user = res.data;
        console.log(user);
        return user;
      } catch (err) {
        console.error(err);
      }
};

export default tryUserFetch;