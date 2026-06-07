export const authorize = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            return res.status(403).json({ 
                success: false, 
                message: 'Forbidden: You do not have permission to perform this action' 
            });
        }
        next();
    };
};
