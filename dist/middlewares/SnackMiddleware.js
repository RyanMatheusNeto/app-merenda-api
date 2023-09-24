"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SnackMiddleware {
    getBodyFromFileUploader(req, _, next) {
        const newBody = req.body.data;
        req.body = JSON.parse(newBody);
        return next();
    }
}
exports.default = SnackMiddleware;
//# sourceMappingURL=SnackMiddleware.js.map