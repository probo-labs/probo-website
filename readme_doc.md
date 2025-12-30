# Documentation Management Guide

This document explains how the Probium documentation is structured and how to maintain it.

## Overview

The documentation system uses a dual approach:
1. **Source files**: Markdown files organized in folders (`src/data/docs/`)
2. **JSON database**: A single JSON file for application consumption (`src/data/documentation.json`)

The documentation is authored in markdown files and synchronized to the JSON file using an automated script.

## Directory Structure

The documentation follows a hierarchical folder structure based on the URL paths defined in `documentation.json`:

```
src/data/docs/
├── content.md                          # /docs (Introduction)
├── installation/
│   └── content.md                      # /docs/installation
├── authentication/
│   └── content.md                      # /docs/authentication
├── usage-scenarios/
│   ├── content.md                      # /docs/usage-scenarios (overview)
│   ├── recording/
│   │   └── content.md                  # /docs/usage-scenarios#recording
│   ├── replay/
│   │   └── content.md                  # /docs/usage-scenarios#replay
│   └── fortification/
│       └── content.md                  # /docs/usage-scenarios#fortification
├── step-types/
│   ├── content.md                      # /docs/step-types (overview)
│   ├── interact/
│   │   └── content.md                  # /docs/step-types#interact
│   ├── assert/
│   │   └── content.md                  # /docs/step-types#assert
│   ├── hover/
│   │   └── content.md                  # /docs/step-types#hover
│   └── ... (other step types)
└── ... (other sections)
```

## Naming Conventions

### Folder Names

Folder names are derived from the `href` and `anchor` values in `documentation.json`:

**Main sections** (from `href` parameter):
- `/docs` → `docs/`
- `/docs/installation` → `docs/installation/`
- `/docs/step-types` → `docs/step-types/`

**Subsections** (from `anchor` parameter):
- Parent: `/docs/step-types` + Anchor: `#hover` → `docs/step-types/hover/`
- Parent: `/docs/parameters` + Anchor: `#editing` → `docs/parameters/editing/`

### File Names

All content files are named **`content.md`** regardless of their location in the hierarchy.

## Editing Documentation

### Workflow

1. **Edit markdown files** in `src/data/docs/` folder structure
2. **Run the sync script** to update `documentation.json`
3. **Commit both** the markdown files and the updated JSON

### Step-by-Step Instructions

1. Locate the content file you want to edit:
   ```bash
   # Example: Editing the hover step type documentation
   src/data/docs/step-types/hover/content.md
   ```

2. Make your changes in the markdown file using your preferred editor

3. Run the synchronization script from the project root:
   ```bash
   node update-documentation.js
   ```

4. Verify the changes:
   ```bash
   # Check git diff to see the updated JSON
   git diff src/data/documentation.json
   ```

5. Commit your changes:
   ```bash
   git add src/data/docs/
   git add src/data/documentation.json
   git commit -m "Update documentation: [describe your changes]"
   ```

## The Update Script

### Location
`update-documentation.js` (in project root)

### What It Does

1. Reads `src/data/documentation.json`
2. For each section and subsection:
   - Locates the corresponding `content.md` file
   - Reads the markdown content
   - Updates the `content` field in the JSON
3. Writes the updated JSON back to the file

### Usage

```bash
# From project root
node update-documentation.js
```

### Output

The script provides progress feedback:
```
Reading documentation.json...
✓ Updated: /docs
✓ Updated: /docs/installation
✓ Updated: /docs/authentication
...
✅ Documentation updated successfully!
```

## Adding New Documentation Sections

### Adding a Main Section

1. Add the section to `documentation.json`:
   ```json
   {
     "id": "new-section",
     "title": "New Section Title",
     "href": "/docs/new-section",
     "content": "",
     "subsections": []
   }
   ```

2. Create the folder structure:
   ```bash
   mkdir -p src/data/docs/new-section
   ```

3. Create the content file:
   ```bash
   # Create src/data/docs/new-section/content.md
   ```

4. Write your content in the markdown file

5. Run the update script:
   ```bash
   node update-documentation.js
   ```

### Adding a Subsection

1. Add the subsection to the parent section in `documentation.json`:
   ```json
   {
     "id": "parent-section",
     "title": "Parent Section",
     "href": "/docs/parent-section",
     "content": "...",
     "subsections": [
       {
         "id": "new-subsection",
         "title": "New Subsection Title",
         "anchor": "#new-subsection",
         "content": ""
       }
     ]
   }
   ```

2. Create the subfolder:
   ```bash
   mkdir -p src/data/docs/parent-section/new-subsection
   ```

3. Create the content file:
   ```bash
   # Create src/data/docs/parent-section/new-subsection/content.md
   ```

4. Write your content in the markdown file

5. Run the update script:
   ```bash
   node update-documentation.js
   ```

## File Format Guidelines

### Markdown Syntax

- Use GitHub-flavored markdown
- Headers start at `#` for main sections, `##` for subsections
- Use proper heading hierarchy
- Include code blocks with language specifiers

### Content Structure

**Main section files** should include:
- Main heading (`#`)
- Overview paragraph
- Subheadings as needed

**Subsection files** should include:
- Subheading (`##`) matching the subsection title
- Detailed content
- Examples and use cases

### Example

```markdown
## Hover Actions (Hover Mode)

Hover steps simulate moving the mouse cursor over a specific page element without clicking it.

### Use Cases

- Triggering dropdown menus
- Revealing tooltips
- Activating hover-based animations

### How to Record

1. Switch to **Hover** mode
2. Wait for the target element to appear
3. Click on the element you want to hover over
```

## Best Practices

1. **Single source of truth**: Always edit the markdown files, never edit the JSON directly
2. **Run the script**: Always run `update-documentation.js` after editing markdown files
3. **Commit together**: Commit markdown and JSON files together to keep them in sync
4. **Review changes**: Use `git diff` to review JSON changes before committing
5. **Consistent formatting**: Follow the existing markdown style and formatting
6. **Clear headings**: Use descriptive headings that match the section titles
7. **Test locally**: Preview your markdown changes before syncing

## Troubleshooting

### Script Warnings

If you see warnings like:
```
⚠ Warning: Could not read src/data/docs/section-name/content.md
```

This means:
- The folder or file doesn't exist
- There's a mismatch between JSON structure and file structure
- Check the `href` or `anchor` values in `documentation.json`

### Path Mismatches

Ensure folder names match the URL structure:
- Remove leading `/` from `href` values
- Remove leading `#` from `anchor` values
- Use the exact path structure

### JSON Syntax Errors

If the script fails with a parse error:
- Check `documentation.json` for syntax errors
- Ensure proper JSON formatting
- Validate with a JSON linter

## Architecture Notes

### Why This Structure?

1. **Developer-friendly**: Markdown files are easy to edit and version control
2. **Application-friendly**: JSON provides structured data for the app
3. **Separation of concerns**: Content authoring vs. data consumption
4. **Version control**: Git diff works well with markdown and JSON
5. **Scalability**: Easy to add new sections and maintain structure

### Data Flow

```
Markdown Files (src/data/docs/)
        ↓
update-documentation.js (sync script)
        ↓
JSON File (src/data/documentation.json)
        ↓
Application (reads JSON)
```

## Summary

- **Edit** markdown files in `src/data/docs/`
- **Sync** using `node update-documentation.js`
- **Commit** both markdown and JSON files together
- **Follow** the folder structure based on href/anchor values
- **Name** all content files as `content.md`
