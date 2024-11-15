/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // API入口登入頁面
    '*': 'main/index',
  // 不須登入與管理權限
    'POST /user/register':'user/register', 
    'POST /user/login':'user/login',
    'POST /app/auth':'app/auth',
  // 需要登入 不須管理權限
    'POST /user/logout':'user/logout',
    'GET /user/me':'user/me',
    'PUT /user/me':'user/me',
  // 需要登入&管理權限
    'GET /user':'user/user',
    'GET /user/id':'user/user',
    'POST /user':'user/user',
    'PUT /user/id':'user/user',
    'DELETE /user/id':'user/user'
};
