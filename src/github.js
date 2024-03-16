// release_notes.js
document.addEventListener("DOMContentLoaded", function () {
	const versionText = document.getElementById("releaseVersion");
	const downloadLink = document.getElementById("downloadLink");
	const repoStars = document.getElementById("stargazersCount");
	const licenseLink = document.getElementById("licenseLink");

	fetch("https://api.github.com/repos/felixleopoldo/benchpress/tags")
		.then((response) => response.json())
		.then((data) => {
			const latestRelease = data[0];
			versionText.textContent = latestRelease.name;
			downloadLink.href = latestRelease.zipball_url;
		})
		.catch((error) => console.error("Error fetching data:", error));

	fetch("https://api.github.com/repos/felixleopoldo/benchpress")
		.then((response) => response.json())
		.then((data) => {
			repoStars.textContent = data.stargazers_count;
			licenseLink.href = data.license.url;
		})
		.catch((error) => console.error("Error fetching data:", error));
});
