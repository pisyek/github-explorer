(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['githubTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "    <tr>\r\n        <td>"
    + alias3((helpers.incremented || (depth0 && depth0.incremented) || alias2).call(alias1,(data && data.index),{"name":"incremented","hash":{},"data":data}))
    + "</td>\r\n        <td>\r\n            <h5><a href=\""
    + alias3(((helper = (helper = helpers.svn_url || (depth0 != null ? depth0.svn_url : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"svn_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data}) : helper)))
    + "</a></h5>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </td>\r\n        <td>"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"language","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias3(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <p>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <p>No description provided.</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2 class=\"mt-5 mb-4\">Search result</h2>\r\n<table id=\"githubTable\" class=\"table\">\r\n<thead class=\"thead-light\">\r\n    <tr>\r\n    <th scope=\"col\">#</th>\r\n    <th scope=\"col\">Repository</th>\r\n    <th scope=\"col\" class=\"w-3\">Language</th>\r\n    <th scope=\"col\" class=\"w-3\">Star</th>\r\n    </tr>\r\n</thead>\r\n<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.repos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>\r\n</table>";
},"useData":true});
})();
