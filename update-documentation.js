const fs = require('fs').promises;
const path = require('path');

async function updateDocumentation() {
  try {
    // Read the generated-documentation.json file
    const docPath = path.join(__dirname, 'src', 'data', 'generated-documentation.json');
    const docContent = await fs.readFile(docPath, 'utf-8');
    const documentation = JSON.parse(docContent);

    console.log('Reading generated-documentation.json...');

    // Process each section
    for (const section of documentation.sections) {
      // Update main section content
      const sectionPath = getSectionPath(section.href);
      const sectionContentPath = path.join(__dirname, 'src', 'data', sectionPath, 'content.md');

      try {
        const content = await fs.readFile(sectionContentPath, 'utf-8');
        section.content = content;
        console.log(`✓ Updated: ${section.href}`);
      } catch (error) {
        console.warn(`⚠ Warning: Could not read ${sectionContentPath}`);
      }

      // Process subsections if they exist
      if (section.subsections && section.subsections.length > 0) {
        for (const subsection of section.subsections) {
          const subsectionPath = getSubsectionPath(section.href, subsection.anchor);
          const subsectionContentPath = path.join(__dirname, 'src', 'data', subsectionPath, 'content.md');

          try {
            const content = await fs.readFile(subsectionContentPath, 'utf-8');
            subsection.content = content;
            console.log(`✓ Updated: ${section.href}${subsection.anchor}`);
          } catch (error) {
            console.warn(`⚠ Warning: Could not read ${subsectionContentPath}`);
          }
        }
      }
    }

    // Write the updated documentation back to the file
    await fs.writeFile(docPath, JSON.stringify(documentation, null, 2), 'utf-8');
    console.log('\n✅ Documentation updated successfully!');

  } catch (error) {
    console.error('❌ Error updating documentation:', error);
    process.exit(1);
  }
}

/**
 * Convert href to file path
 * Example: "/docs/installation" -> "docs/installation"
 */
function getSectionPath(href) {
  // Remove leading slash and convert to path
  return href.replace(/^\//, '');
}

/**
 * Convert href + anchor to subfolder path
 * Example: "/docs/step-types" + "#hover" -> "docs/step-types/hover"
 */
function getSubsectionPath(href, anchor) {
  // Remove leading slash from href and # from anchor
  const basePath = href.replace(/^\//, '');
  const anchorPath = anchor.replace(/^#/, '');
  return path.join(basePath, anchorPath);
}

// Run the update
updateDocumentation();
