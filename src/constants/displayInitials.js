export function displayInitials(fullName) {
  var names = fullName.split(" ");
  var initials = "";

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    initials += name[0];
  }

  return initials;
}
