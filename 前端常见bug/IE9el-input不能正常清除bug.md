
### bug场景：IE9浏览器 element-ui input组件在删除值的时候，没有实时触发v-model

### 解决方案:利用原生的input 替换<el-input&gt;

示例如下：

原方案：
```jsx
<el-input type="text"
	placeholder="请填写注册电话"
	v-model.trim="invoiceForm.phone">
</el-input>
```
适配方案：
```jsx
 <input type="text"
    v-model.trim="invoiceForm.phone"
    @blur="validateFieldFn('phone')"
    autocomplete="off"
    placeholder="请填写注册电话"
    class="el-input__inner">

// validateFieldFn方法手动触发校验
validateFieldFn(prop) {
  this.$refs.invoiceForm.validateField([prop]);
}
```
