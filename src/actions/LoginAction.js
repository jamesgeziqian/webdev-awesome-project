
export const login_status = () => {
    return {type: "LOGIN"};
};

export const logout_status = () => {
    return {type: "LOGOUT"};
};

export const checkProfile = (res) => {
    return {type: "PROFILE", res: res};
};
