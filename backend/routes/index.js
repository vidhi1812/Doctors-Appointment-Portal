const router=require('express').Router();



router.use((req, res) => {
    console.warn(
      `404 Not found. Id: ${req.identifier} ${req.url} ${req.method} ${
        req.headers['user-agent']
      } ${JSON.stringify(req.body)}`,
      'warn'
    );
    return res.status(404).json({
      success: false,
      msg:"404 not found"
    });
  });
  module.exports=router