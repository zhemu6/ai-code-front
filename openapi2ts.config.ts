export default {
  requestLibPath: "import request from '@/request'",
  // 路径修改为后端服务提供的Swagger接口文档的地址、生成前确保后端启动
  schemaPath: 'http://localhost:8123/api/v3/api-docs',
  serversPath: './src',
}
