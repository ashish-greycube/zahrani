frappe.ui.form.on("Sales Invoice", "refresh", function (frm) {
    frappe.call({
        method: "erpnext.stock.get_item_details.get_pos_profile",
        args: {
            company: frappe.defaults.get_user_default("Company"),
            user: frappe.session.user_email
        },
        callback: function (r) {
            if (r.message) {     
                if (cur_frm.doc.branch == undefined && r.message.branch != '') {
                    cur_frm.set_value("branch",r.message.branch);
                }
                if (cur_frm.doc.invoice_type =="" && r.message.invoice_type != '') {
                    cur_frm.set_value("invoice_type", r.message.invoice_type);
                }
            }
        }
    });
});